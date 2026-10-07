<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture
- Keep this prototype as a single scrolling index route with section anchors, because the requested navigation explicitly stays on one page.
- Define the club's visual styles and semantic color tokens in src/styles.css, keeping feature markup theme-independent.
- Serve uploaded club media through Lovable Assets pointers rather than committed binaries.
- Render the hero puzzle as an accessible SVG with CSS-controlled assembly animation, because labeled interlocking pieces need crisp geometry and reduced-motion support.
