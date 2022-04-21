## Repro for bug with `@testing-library/user-event` and React act warnings

This repro contains one component `Form` with a single input field. This field is required
and renders an error message whenever the field is empty.

The single test in `src/Form/Form.test.tsx` passes with no act warnings on branch `main`. 
However, when moving to branch `user-event@14`, which has upgraded 
`@testing-library/user-event` to v14.1.1, the test passes, but *with* an act warning. 