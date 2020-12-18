class Api::V1::FollowsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
    @follow = Follow.find_by(id: params[:id])
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render json: { message: 'successfully followed user' }
    else
      render json: { error: 'unable follow user for some reason, check backend' }, status: 422
    end
  end

  def destroy
    p 'follow_params'
    p follow_params
    follower = follow_params['follower_id'].to_i
    following = follow_params['following_id'].to_i
    p 'follower', follower
    p 'followed', following
    @follow = Follow.where(follower_id: follower).where(following_id: following)
    p 'follow', @follow
    @follow.delete_all
    render json: { message: 'deleted the like' }
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
