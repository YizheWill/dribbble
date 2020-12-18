# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
emails = ['@gmail.com', '@yahoo.com', '@appacademy.io', '@126.com', '@will.com']

usernames = ['Josh Kubar', 'Niko Wells', 'Kevin Bastoul', 'Cameron Tanjoco', 'Noah Peart', 'Alan Dai', 'Michael Chen', 'Oliver Lopez', 'Ori Ravid', 'Will Wang', 'Rex Gao', 'Samual Wong', 'Walker', 'Tom Cheung', 'William Leung']

avatar_urls = ['https://res.cloudinary.com/willwang/image/upload/v1608278741/Josh_ykuwlh.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278740/niko_wells_avjrp0.png', 'https://res.cloudinary.com/willwang/image/upload/v1608278740/Kevin_th8nfj.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278738/Cameron_Tanjoco_qrx9t7.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278738/Noah_g0iawx.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278738/alan_dai_zo0qoo.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278738/michael_chen_jljbuw.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278738/Oliver_Lopez_wicd12.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278738/Ori_ovxet3.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278738/Yizhe_Wang_ka3nzg.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278737/Rex_Gao_epgmo7.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278737/sam_wong_rgpe8k.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608278593/walker_eewwap.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608280987/tom_nqfsay.jpg', 'https://res.cloudinary.com/willwang/image/upload/v1608280986/william_irkvnr.jpg'].reverse!

usernames.each_with_index do |un, idx|
  name = un
  username = name.gsub(' ', '_').downcase
  avatar_url = avatar_urls[idx]
  email = username.gsub('_', '').downcase + emails.sample
  bio = Faker::Quote.yoda
  location = Faker::Address.city + ' , ' + Faker::Address.state
  User.create({ name: name, username: username, password: '123456', email: email, avatar_url: avatar_url, bio: bio, location: location })
end

shots_url = [
  'https://res.cloudinary.com/willwang/video/upload/v1608279704/34_jcumcg.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279702/33_quwd0a.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279683/8_p0spqb.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279681/7_dolvfu.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279662/13_gvscok.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279626/30_ugic2q.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279615/27_ba0hhj.mp4',
  'https://res.cloudinary.com/willwang/image/upload/v1608279611/25_aoazi9.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279611/16_eukmph.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279609/6_iu6kvm.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279608/2_axmw7g.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279608/5_onrays.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279602/4_ax4gug.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279601/3_juvcam.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279600/15_yxfzkh.webp',
  'https://res.cloudinary.com/willwang/video/upload/v1608279598/1_vy4ct6.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279592/32_nuh7xs.mp4',
  'https://res.cloudinary.com/willwang/video/upload/v1608279585/10_elsmje.mp4',
  'https://res.cloudinary.com/willwang/image/upload/v1608279584/14_nyzdla.webp',
  'https://res.cloudinary.com/willwang/video/upload/v1608279578/28_anvfjm.mp4',
  'https://res.cloudinary.com/willwang/image/upload/v1608279569/12_ubsy0p.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279567/11_mzq0ms.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279566/9_rqinwp.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279565/24_viybbd.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279565/21_q9vyhn.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279564/22_ap7gaa.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279563/31_qpok4z.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279563/23_npj6fd.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279562/20_t6z9x8.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279560/29_keoclm.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279557/18_s1xcea.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279555/17_uomuqx.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608279554/26_tqjlzc.webp',
  'https://res.cloudinary.com/willwang/image/upload/v1608278894/2_cxefyb.webp',
]
20.times do
  Collection.create!({ user_id: (1..14).to_a.sample, title: Faker::TvShows::BigBangTheory.character })
end

shots_url.each do |e|
  surf = e.split('.').last
  image_or_video = !(surf == 'mp4')
  Shot.create!({ title: Faker::Books::CultureSeries.book, description: Faker::Movies::StarWars.quote, image_url: e, image_or_video: image_or_video, user_id: (1..15).to_a.sample, collection_id: (1..20).to_a.sample })
end
