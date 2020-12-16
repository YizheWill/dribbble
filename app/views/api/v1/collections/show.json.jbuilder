#json.partial! 'show',
json.extract! @collection, :id, :title
json.userId @collection.user.id
json.username @collection.user.name
json.artistCount @collection.artists.pluck(:id)&.uniq&.count
json.shots @collection.shots do |s|
  # json.partial! 'show', shot: s
  json.id s.id
  json.imageUrl s.image_url
  json.avatarUrl s.user.avatar_url
  json.artistName s.user.name
end
