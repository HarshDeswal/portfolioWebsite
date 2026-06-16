import styles from '../styles/HomesectionAI.module.css'

const HomesectionAI = () => {
  return (
    <div className={styles.sectionAiOuter}>
      <h1 className={styles.title}>AI Development Workflow</h1>
      <p className={styles.subtitle}>
        How I use AI tools like Cursor and GitHub Copilot to build, improve and ship projects faster.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Codebase analysis</h2>
          <p>
            I use AI assistants to quickly understand unfamiliar parts of the codebase, trace data flow,
            and spot edge cases that are easy to miss in manual reviews.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Implementing new features</h2>
          <p>
            For new features, I pair program with AI to sketch components, API calls and state management,
            then refine the implementation to match the product vision and code style.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Refactoring components</h2>
          <p>
            AI helps me refactor large components into smaller, reusable pieces, improve naming,
            and modernize patterns while keeping behavior and UI consistent.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Developer productivity</h2>
          <p>
            By automating boilerplate, tests and repetitive changes, AI tools free up time to focus
            on architecture, performance, UX and solving the actual product problems.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomesectionAI

