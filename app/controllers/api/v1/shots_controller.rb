class Api::V1::ShotsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_shot, only: %i(show update destroy)

  def index
    @shots = Shot.all
  end

  def show
  end

  def create
    @shot = Shot.new(shot_params)
    if @shot.save
      @user = @shot.user
      render :show
    else
      render json: { error: @shot.errors.full_messages }.to_json, status: 422
    end
  end

  def update
    if @shot.update(shot_params)
      render :show
    else
      render json: { error: 'you have to fill in the title and upload an image' }.to_json, status: 422
    end
  end

  def destroy
    @shot.destroy
    render json: { message: 'shot deleted' }.to_json
  end

  private

  def set_shot
    @shot = Shot.find_by(id: params[:id])
  end

  def shot_params
    params.require(:shot).permit(:title, :description, :image_url, :view_count, :allow_comment, :image_or_video, :price)
  end
end
