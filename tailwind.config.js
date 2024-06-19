/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sora": ["sora"],
        "sora-medium": ["sora-medium"],
        "sora-bold": ["sora-bold"],
        "sora-light": ["sora-light"],
        "sora-semibold": ["sora-semibold"],
        "cabinet": ["cabinet"],
        "cabinet-bold": ["cabinet-bold"],
        "cabinet-medium": ["cabinet-medium"],
        "cabinet-light": ["cabinet-light"],
      }
    },
  },
  plugins: [],
}

