const Heading = ({ icon: Icon, title }) => {
  return (
    <div className="relative flex flex-row gap-16">
      <Icon className="absolute inline h-16 -left-24 w-14" />
      <h1 className="inline mb-5 text-5xl font-normal ">{title}</h1>
    </div>
  )
}
export default Heading
