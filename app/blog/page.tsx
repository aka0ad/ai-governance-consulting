export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Coming Soon: Thought Leadership on Ai Governance",
      date: "2026-08-18",
      excerpt: "In-depth research and guidance on building trustworthy AI systems in regulated industries.",
    },
  ];

  return (
    <>
      <h1>Insights</h1>
      <p>Research, frameworks, and practical guidance on AI governance for enterprises.</p>

      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-item">
            <div className="blog-date">{post.date}</div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.id}`}>Read more →</a>
          </article>
        ))}
      </div>

      <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <h2>Upcoming Topics</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li>The August 2026 EU AI Act Compliance Panic: What Your Exec Team Should Do Now</li>
          <li>Stop Building AI Without Governance: A Practical Framework for Enterprise Leaders</li>
          <li>The Ai Governance Maturity Curve: Where Most Enterprises Fail (And How to Fix It)</li>
          <li>Agentic AI and Governance: Why Traditional Risk Frameworks Aren't Enough</li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>Subscribe below to get notified when new articles are published.</p>
      </section>

      <section style={{ marginTop: '2rem', maxWidth: '400px' }}>
        <h3>Get Ai Governance Insights</h3>
        <form>
          <input type="email" placeholder="your@email.com" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}
