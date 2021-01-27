#json.partial! 'show',
json.extract! @collection, :id, :title
json.userId @collection.user.id
json.username @collection.user.name
json.avatarUrl @collection.user.avatar_url
json.artistCount @collection.artists.pluck(:id)&.uniq&.count
json.shots @collection.shots do |s|
  # json.partial! 'show', shot: s
  json.imageUrl s.image_url
  json.id s.id
  json.artistId s.user.id
  json.avatarUrl s.user.avatar_url
  json.artistName s.user.name
  json.likers s.shotlikes.pluck(:user_id)
  json.commentCount s.comments.length
  json.likeCount s.shotlikes.length
end
