function SectionHeading({ title, detail }) {
  return (
    <div className="section-heading">
      <h2>{title}<span>.</span></h2>
      {detail && <p>{detail}</p>}
    </div>
  )
}

export default SectionHeading
