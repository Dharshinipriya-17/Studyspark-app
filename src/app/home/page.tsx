// app/home/page.tsx

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#2c3e50' }}>Welcome to StudySpark 🔥</h1>
      
      <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
        StudySpark is your all-in-one learning companion designed to help you stay focused, organized, and motivated.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#34495e' }}>✨ Features</h2>
      <ul style={{ fontSize: '1rem', lineHeight: '1.6' }}>
        <li>📚 Track your study goals and progress</li>
        <li>📝 Organize your tasks and deadlines</li>
        <li>⏰ Get smart reminders and focus timers</li>
        <li>🎯 Personalized learning recommendations</li>
      </ul>

      <h2 style={{ marginTop: '2rem', color: '#34495e' }}>🚀 Start Your Journey</h2>
      <p>
        Whether you're preparing for exams or learning something new, StudySpark is here to make it easier and more effective.
      </p>
    </div>
  );
}
