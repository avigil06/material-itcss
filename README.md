# Material ITCSS

This is a proof of concept weekend project to test out ITCSS concepts by building out UI components with a focus on Material Spec. My goal is to determine  the challenges and benefits of these bullet points below.

- No style blocks in Vue SFC's
- Leverage Storybook to build and document the available Components
- Determine the viability of theming in ITCSS and how much of it can be reused from project to project
- Determine the barrier to entry
- Investigate CSS specificity collisions


### Developing with Storybook
```
npm run storybook
```

### Week 1 Findings

This week, I completed a basic set of buttons, a general card, and a checkbox. I leverages all ITCSS principles to complete these. All of my SFC's have been constructed without style blocks so far. I enjoy working with style blocks in SFC's, however if this component library were to be used across multiple projects, the CSS would need to be extracted from the markup and behavior. This would allow it to be used in a static build, react, angular, basically it is view layer agnostic.

I was actually surprised how simple it was to navigate around the SCSS files and find what I am looking for. Additionally, it is pretty intuitive to build new components based on the existing SCSS library or extend the library with additional features. Additionally I have split the SCSS framework into a main file, which is used in the components library, as well as a non-output file, which allows project that imports the library, to leverage the global settings, and mixins.

I am looking forward to tackling basic and advanced form inputs next. This should be a great way to stretch the usefulness of the SCSS framework.

__Goal Summary__

- No style blocks: So far, I don't mind this one. Yes the styles are kept separate from the components, but in cases like an anchor or button, this can be a benefit. Styles are not duplicated from a button to an anchor acting as a button.
- Leverage Storybook to build and document available components: This is a win. Except I can't figure out how to get the knobs plugin to work. This has caused an ugly scenario where I need to render a button in one story, and render the disabled version of it in a follow-up story.
- Determine the viability of theming in ITCSS and how much of it can be reused from project to project: So far most of it seems like it can be migrated from one project to another with very little work. Additionally, it seems like it is going to be pretty straight forward to build a component library and use it, and global settings and utilities in larger scale projects.
- Determine the barrier to entry: I think the verdict is still out on this one. There is a bit of hunting through the SCSS files to find the right utilities and variables. I think documentation and using storybook to describe the usage of the dynamic pieces will help with this.
- Investigate CSS specificity collisions: So far I have not found myself longing for BEM. That's a plus. I have not been a big fan of BEM since attempting to implement it in my work projects. It feels clunky, unnecessarily verbose and unintuitive.

__Verdict__
So far, I am enjoying the ITCSS world and I hope to expand upon my sample library and eventually build a sample UI from it once it becomes more complete.
