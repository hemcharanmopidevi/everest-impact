"use client";

import { CheckCircle2, Circle, Plus, Trash2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

const KEY = "everest-planner";

export default function PlannerPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    try {
      setTasks(JSON.parse(localStorage.getItem(KEY) || "[]"));
    } catch {
      setTasks([]);
    }
  }, []);

  const persist = (next: Task[]) => {
    setTasks(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    persist([
      ...tasks,
      { id: crypto.randomUUID(), title: title.trim(), done: false },
    ]);
    setTitle("");
  };

  const doneCount = tasks.filter((t) => t.done).length;
  const progress = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold tracking-tight">Study Planner</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        New feature — plan daily targets and track completion locally in your browser.
      </p>

      <div className="mb-6 rounded-2xl border border-border bg-card p-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium">Today&apos;s progress</span>
          <span className="text-muted-foreground">
            {doneCount}/{tasks.length} · {progress}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={onSubmit} className="mb-6 flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a task… e.g. 50 Quant questions"
          className="h-11 flex-1 rounded-xl border border-input bg-card px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
        >
          <Plus className="size-4" />
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {tasks.length === 0 && (
          <li className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            No tasks yet. Add your first study goal.
          </li>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
          >
            <button
              type="button"
              aria-label={task.done ? "Mark incomplete" : "Mark complete"}
              onClick={() =>
                persist(
                  tasks.map((t) =>
                    t.id === task.id ? { ...t, done: !t.done } : t
                  )
                )
              }
              className="text-primary"
            >
              {task.done ? (
                <CheckCircle2 className="size-5" />
              ) : (
                <Circle className="size-5" />
              )}
            </button>
            <span
              className={
                task.done
                  ? "flex-1 text-sm text-muted-foreground line-through"
                  : "flex-1 text-sm font-medium"
              }
            >
              {task.title}
            </span>
            <button
              type="button"
              aria-label="Delete task"
              onClick={() => persist(tasks.filter((t) => t.id !== task.id))}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="size-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
