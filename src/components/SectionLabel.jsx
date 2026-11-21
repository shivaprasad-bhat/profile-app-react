function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span> / {children}
    </div>
  )
}

export default SectionLabel
