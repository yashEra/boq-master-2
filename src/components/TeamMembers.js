const people = [
    {
      name: 'Yasith Eranda',
      role: 'Project Lead',
      imageUrl:
        'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/360084020_2569908989834568_3891376956868534226_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGX8hw90ZFDOgk9PKnTGohrYeF60zzFpLth4XrTPMWku5B67OEbsX6EwTj9ndNLwOh8s32VnmRD6uxuMuU5c--r&_nc_ohc=3quKlvp_2qgAX9gEtgK&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDOfblIRUjyJ1jromPmsoyQTcOr-nN8lhzzpPdAw0iOsA&oe=64B629CD',
    },
    {
        name: 'Raveen Rajapaksha',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Dimagi Jayawardhna',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },    {
        name: 'Madusha Gunawardana',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },    {
        name: 'Nethree Weerakoon',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },    {
        name: 'Sewmini Rathnayake',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
  