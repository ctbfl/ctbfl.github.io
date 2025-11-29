# ctbfl.github.io

Here is **Junshan Huang**. This is the repository for my personal website.

This personal website is based on GuangLun2000.github.io, made by Hanlin Cai. Thanks Hanlin!

## Blogging workflow

- New post: add a markdown file under `_posts/` named `YYYY-MM-DD-title.md`.
- Front matter to include:
  ```yaml
  layout: post
  title: "<Post title>"
  date: YYYY-MM-DD
  tags: [tag1, tag2]
  description: Optional summary shown in lists
  ```
- Tags: add each desired tag to the `tags:` array. Create a tag archive page once per tag (copy one of the files under `tag/`, change `tag:` and `permalink:` accordingly).
- Blog index: `/blog/` with search + tag filters. All tags overview lives at `/tags/`.

## Inline explanation component

Use anywhere in Markdown:

```markdown
Some term <explain data-title="What is RAFT?">
Explain content with **Markdown**, lists, etc.
</explain> connects to the paragraph.
```

- With JS enabled this renders as a highlighted inline pill that opens a popover.
- Without JS the explanation stays readable inline; the component also injects a `<details>/<summary>` fallback for accessibility.

## Local testing

- Install dependencies (`bundle install`) if needed.
- Serve locally: `bundle exec jekyll serve`
- Visit http://localhost:4000 (blog index is at `/blog/`).
