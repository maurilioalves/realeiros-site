# LAB — Mobile feedback visibility hotfix

Regression found during mobile R5.1 smoke: the floating feedback CTA continued rendering during gameplay and could overlap the SNAP control.

## Fix

- The shell continues to receive the coarse `menu` / `gameplay` surface from the game iframe.
- `setFeedbackSurface()` mirrors that state into `body[data-lab-surface]`.
- Gameplay hides the feedback CTA through two independent guards:
  - the button `hidden` attribute;
  - a shell-level `data-lab-surface='gameplay'` CSS rule with `display: none !important`, `visibility: hidden !important`, and `pointer-events: none !important`.
- The feedback gate note is also forced out of the gameplay stacking context.
- Returning to a menu/hub restores the CTA normally.

No gameplay, save, reward, localization, hCaptcha, Web3Forms, or anti-abuse behavior is changed.
