import Card from "./Card"

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4  rounded-lg">
         <Card />
      </div>
    </div>
  </section>
  )
}

export default HomeCards