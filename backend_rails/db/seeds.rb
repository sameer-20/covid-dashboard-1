require('faker')
User.destroy_all
Favourite.destroy_all


1.times do
  User.create(first_name: 'test1', last_name: 'userone', email: 'test1@gmail.com', password: 'test1', mobile: '+123456789')
  User.create(first_name: 'test2', last_name: 'usertwo', email: 'test2@gmail.com', password: 'test2', mobile: '+234567890')
  User.create(first_name: 'test3', last_name: 'userthree', email: 'test3@gmail.com', password: 'test3', mobile: '+456789012')
  User.create(first_name: 'test4', last_name: 'userFour', email: 'test4@gmail.com', password: 'test3', mobile: '+678901234')
end

Datum.create(key: 'yesterday_all', value: '[{"updated":1601051259604,"country":"Afghanistan","countryInfo":{"_id":4,"iso2":"AF","iso3":"AFG","lat":33,"long":65,"flag":"https://disease.sh/assets/img/flags/af.png"},"cases":39186,"todayCases":16,"deaths":1451,"todayDeaths":0,"recovered":32619,"todayRecovered":0,"active":5116,"critical":93,"casesPerOneMillion":1002,"deathsPerOneMillion":37,"tests":109765,"testsPerOneMillion":2805,"population":39127106,"continent":"Asia","oneCasePerPeople":998,"oneDeathPerPeople":26966,"oneTestPerPeople":356,"activePerOneMillion":130.75,"recoveredPerOneMillion":833.67,"criticalPerOneMillion":2.38},{"updated":1601051259727,"country":"Albania","countryInfo":{"_id":8,"iso2":"AL","iso3":"ALB","lat":41,"long":20,"flag":"https://disease.sh/assets/img/flags/al.png"},"cases":13045,"todayCases":124,"deaths":373,"todayDeaths":3,"recovered":7309,"todayRecovered":70,"active":5363,"critical":18,"casesPerOneMillion":4534,"deathsPerOneMillion":130,"tests":79512,"testsPerOneMillion":27637,"population":2877051,"continent":"Europe","oneCasePerPeople":221,"oneDeathPerPeople":7713,"oneTestPerPeople":36,"activePerOneMillion":1864.06,"recoveredPerOneMillion":2540.45,"criticalPerOneMillion":6.26},{"updated":1601051259588,"country":"Algeria","countryInfo":{"_id":12,"iso2":"DZ","iso3":"DZA","lat":28,"long":3,"flag":"https://disease.sh/assets/img/flags/dz.png"},"cases":50579,"todayCases":0,"deaths":1703,"todayDeaths":0,"recovered":35544,"todayRecovered":0,"active":13332,"critical":31,"casesPerOneMillion":1149,"deathsPerOneMillion":39,"tests":0,"testsPerOneMillion":0,"population":44032228,"continent":"Africa","oneCasePerPeople":871,"oneDeathPerPeople":25856,"oneTestPerPeople":0,"activePerOneMillion":302.78,"recoveredPerOneMillion":807.23,"criticalPerOneMillion":0.7}]')

############ favourites

puts "Re-creating Favourites ..."
Favourite.create(user_id: 1, country_name: 'Jordan')
Favourite.create(user_id: 1, country_name: 'Egypt')
Favourite.create(user_id: 1, country_name: 'France')
Favourite.create(user_id: 1, country_name: 'Afghanistan')

Favourite.create(user_id: 2, country_name: 'Jordan')
Favourite.create(user_id: 2, country_name: 'France')



