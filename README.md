# Material ITCSS

This is a proof of concept weekend project to test out ITCSS concepts by building out UI components with a focus on Material Spec. My goal is to determine how the challenges and benefits of these bullet points below.

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
