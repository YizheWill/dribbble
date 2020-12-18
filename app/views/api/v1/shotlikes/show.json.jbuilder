json.set! @shotlike.id do
  json.id @shotlike.id
  json.likerId @shotlike.user.id
  json.liker @shotlike.user.name
  json.shotId @shotlike.shot.id
end
