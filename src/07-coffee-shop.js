/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let sizes = ["small", "medium", "large"];
  let types = ["regular", "latte", "cappuccino", "mocha"];
  if (!sizes.includes(size) || !types.includes(type)) {
    return -1;
  }

  let small = 3.0;
  let medium = 4.0;
  let large = 5.0;

  if (size === "small") {
    if (type === "regular") {
      small += 0.0;
    } else if (type === "latte") {
      small += 1.0;
    } else if (type === "cappuccino") {
      small += 1.5;
    } else if (type === "mocha") {
      small += 2.0;
    }

    if (extras.whippedCream) {
      small += 0.5;
    }

    if (extras.extraShot) {
      small += 0.75;
    }

    return small;
  } else if (size === "medium") {
    if (type === "regular") {
      medium += 0.0;
    } else if (type === "latte") {
      medium += 1.0;
    } else if (type === "cappuccino") {
      medium += 1.5;
    } else if (type === "mocha") {
      medium += 2.0;
    }

    if (extras.whippedCream) {
      medium += 0.5;
    }

    if (extras.extraShot) {
      medium += 0.75;
    }

    return medium;
  } else if (size === "large") {
    if (type === "regular") {
      large += 0.0;
    } else if (type === "latte") {
      large += 1.0;
    } else if (type === "cappuccino") {
      large += 1.5;
    } else if (type === "mocha") {
      large += 2.0;
    }

    if (extras.whippedCream) {
      large += 0.5;
    }

    if (extras.extraShot) {
      large += 0.75;
    }

    return large;
  }
}
