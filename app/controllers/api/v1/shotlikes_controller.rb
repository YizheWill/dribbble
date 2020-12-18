class Api::V1::ShotlikesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @shotlikes = Shotlike.where(shot_id: params[:shot_id])
  end

  def show
    @shotlike = Shotlike.find_by(id: params[:id])
  end

  def create
    p 'like_params'
    p like_params
    @shotlike = Shotlike.new(like_params)

    if @shotlike.save
      render :show
    else
      render json: { error: 'cannot like this one for some reason, check server' }.to_json, status: 422
    end
  end

  def destroy
    p 'like_params'
    p like_params
    user = like_params['user_id'].to_i
    shot = like_params['shot_id'].to_i
    p 'user', user
    p 'shot', shot
    @shotlike = Shotlike.where(shot_id: shot).where(user_id: user)
    p 'shotlike', @shotlike
    @shotlike.delete_all
    render json: { message: 'deleted the like' }
  end

  private

  def like_params
    params.require(:shotlike).permit(:shot_id, :user_id)
  end
end
