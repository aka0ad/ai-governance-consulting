'use client';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Coming Soon: Claude Ai Deployment Insights",
      date: "2026-08-18",
      excerpt: "Practical guidance on Claude Ai team account configuration, security architecture, and enterprise scaling.",
    },
  ];

  return (
    <>
      <h1>Insights</h1>
      <p>Research, frameworks, and practical guidance on Claude Ai deployment and Ai system architecture for enterprise.</p>

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
          <li>Claude Ai Team Account Setup: Best Practices for Enterprise Deployment</li>
          <li>Secure Claude Ai Integration: Data Handling, Compliance, and Architecture Patterns</li>
          <li>Scaling Claude Ai Across Your Organization: Governance, Access Control, and Cost Optimization</li>
          <li>Claude Ai + Your Systems: API Integration, Workflow Automation, and Real-World Use Cases</li>
        </ul>
        <p style={{ marginTop: '1.5rem' }}>Subscribe below to get notified when new articles are published.</p>
      </section>

      <section style={{ marginTop: '2rem', maxWidth: '400px' }}>
        <h3>Get Claude Ai Deployment Insights</h3>
        <form>
          <input type="email" placeholder="your@email.com" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}
