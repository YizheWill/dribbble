# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
emails = ['@gmail.com', '@yahoo.com', '@appacademy.io', '@126.com', '@will.com']
3.times do
  name = Faker::Name.unique.name
  username = name.gsub(' ', '_').downcase
  avatar_url = Faker::Avatar.image
  email = username.gsub('_', '').downcase + emails.sample
  bio = Faker::Quote.yoda
  location = Faker::Address.city + ' , ' + Faker::Address.state
  User.create({ name: name, username: username, password: '123456', email: email, avatar_url: avatar_url, bio: bio, location: location })
end
shots_url = ['https://cdn.dribbble.com/users/125060/screenshots/14737337/media/44c2e084c430e7250a1a199fe1595f14.mp4',
             'https://cdn.dribbble.com/users/6051/screenshots/14738275/media/dbf64fc15852541d976bdeebf31ccb23.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1821723/screenshots/14011423/media/7e58ffee3ad50f3e3e0ace2bbbd106d3.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/78637/screenshots/14736268/media/bc0ae527022b832c3295c41188b3b6d7.mp4',
             'https://cdn.dribbble.com/users/1821723/screenshots/7249431/media/d12dfd5c8137dbec123b4a275cc09d35.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1821723/screenshots/6853214/image.png?compress=1&resize=800x600',
             'https://cdn.dribbble.com/users/1821723/screenshots/6671754/learning_a_new_style_4x.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1821723/screenshots/4937888/asset_2.png?compress=1&resize=800x600',
             'https://cdn.dribbble.com/users/1821723/screenshots/7436097/media/ace865e3971369f929cef4da0eb8c49c.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/427857/screenshots/14742262/media/cecce0f6ee0614b72616fd76fb53b34b.mp4',
             'https://cdn.dribbble.com/users/295355/screenshots/14745844/media/2748fed77ec3b400bf576da82212e5f1.mp4',
             'https://cdn.dribbble.com/users/74271/screenshots/14744829/media/bc2cbc3158fbd3b01121df83a34114a7.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/31348/screenshots/14744009/media/e5372ee8048dffd99c4a5abdfe1b841f.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/31348/screenshots/14744009/media/42ba2bf5121a0f05561c99306ab30ee2.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1997192/screenshots/14743069/media/4e00b71723793ca82c1d4f24e7e2a758.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/631290/screenshots/14744730/media/4355d6dadcb25aac968412180ce18ea2.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/631290/screenshots/6830792/56_summer19_4x.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1644453/screenshots/14743970/media/45bf83ec703590747cf2c06ac41bb654.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/61921/screenshots/14744365/media/07c706f18ff8070255e596b23a061247.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/61921/screenshots/6129024/battery_4x.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/2461751/screenshots/14204705/media/dafb6514617aabf677e47b907f747f58.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/508142/screenshots/14745702/media/ecfdfa1cbc7e2e57d82d35f3e7fd2959.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/508142/screenshots/12990001/media/3acc1c497e6379ff635396de8c98e72b.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/2071065/screenshots/14743378/media/4b3f00ada8a1d59553163d8f3a5a227b.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1731254/screenshots/14743819/media/60ad54e39b99937caf679e03e425c884.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1161944/screenshots/14743434/media/b66cb60e0964d0abf93b9faee3b25a6a.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1192538/screenshots/13918727/media/7dc7bd18338598d4df5318e131ccbaee.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/2461751/screenshots/14125804/media/119b4e9568cf291d0b88d4dfabe2ee35.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/173981/screenshots/14031059/media/0a8c2914201e4c95a867d4d31f3dd92c.jpg?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/1811807/screenshots/14699817/media/f1981ecf30c872a12053487d64052e55.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/414694/screenshots/14742295/media/c9569c1a8f5332fba669b2304b1c5c3e.mp4',
             'https://cdn.dribbble.com/users/32512/screenshots/14740722/media/495a757b0414c73e76e7874af51a16da.mp4',
             'https://cdn.dribbble.com/users/1008679/screenshots/14741652/media/f6d0388324384d2a8e4a1a2ca83e731a.mp4',
             'https://cdn.dribbble.com/users/2665708/screenshots/14156072/media/3edbff361e67bfda9d03b80e338a517d.png?compress=1&resize=1600x1200',
             'https://cdn.dribbble.com/users/2765745/screenshots/14742984/media/66521981352502687c15c5763c9e073a.gif']

6.times do
  Collection.create!({ user_id: [1, 2, 3].sample, title: Faker::TvShows::BigBangTheory.character })
end

shots_url.each do |e|
  surf = e.split('.').last
  image_or_video = !(surf == 'mp4')
  Shot.create!({ title: Faker::Books::CultureSeries.book, description: Faker::Movies::StarWars.quote, image_url: e, image_or_video: image_or_video, user_id: [1, 2, 3].sample, collection_id: [1, 2, 3, 4, 5, 6].sample })
end
