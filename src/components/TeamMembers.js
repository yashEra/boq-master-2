const people = [
    {
      name: 'Yasith Eranda',
      role: 'Project Lead',
      imageUrl:
        'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
    },
    {
        name: 'Raveen Rajapaksha',
        role: 'Developer',
        imageUrl:
          'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
      },
      {
        name: 'Dimagi Jayawardhna',
        role: 'Developer',
        imageUrl:
          'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
      },    {
        name: 'Madusha Gunawardana',
        role: 'Developer',
        imageUrl:
          'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
      },    {
        name: 'Nethree Weerakoon',
        role: 'Developer',
        imageUrl:
          'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
      },    {
        name: 'Sewmini Rathnayake',
        role: 'Developer',
        imageUrl:
          'https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg',
      },
    // More people...
  ]
  
  export default function TeamMembers() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a team of professionals doing our best to bring a good and quality service.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-40 w-40 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  