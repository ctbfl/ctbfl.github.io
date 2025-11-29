---
layout: post
title: "Welcome to the Lab Notebook"
date: 2025-01-15
tags: [robotics, embodied-ai, notes]
description: Kicking off a lightweight lab notebook with search, tags, and inline explanations.
---

Launching a blog here to capture quick experiments, half-baked ideas, and project milestones.

## Inline explanation demo

When you see a specialized term, you can expand it inline:

Some term <explain data-title="What is RAFT?">
RAFT is a deep optical flow model for estimating pixel-wise motion between frames. It stacks *recurrent* updates on a coarse-to-fine correlation volume for high accuracy.

You can even add lists:

- works well on real-world videos  
- great for bootstrapping robot perception
</explain> connects to your prior work.

## A tiny code snippet

```python
def plan_to_grasp(object_pose, gripper_width=0.07):
    # quick heuristic: align to object and clamp within gripper limits
    approach = (object_pose.x, object_pose.y, object_pose.z + 0.12)
    grasp = (object_pose.x, object_pose.y, object_pose.z)
    return {"approach": approach, "grasp": grasp, "width": min(gripper_width, 0.08)}
```

## Next steps

- Publish a short write-up after each weekly meeting.
- Track failure cases with the tag <code>notes</code> so they remain searchable.
