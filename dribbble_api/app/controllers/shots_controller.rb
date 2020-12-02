class ShotsController < ApplicationController
  before_action :set_shot, only: [:show, :update, :destroy]

  # GET /shots
  def index
    @shots = Shot.all

    render json: @shots
  end

  # GET /shots/1
  def show
    render json: @shot
  end

  # POST /shots
  def create
    @shot = Shot.new(shot_params)

    if @shot.save
      render json: @shot, status: :created, location: @shot
    else
      render json: @shot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shots/1
  def update
    if @shot.update(shot_params)
      render json: @shot
    else
      render json: @shot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shots/1
  def destroy
    @shot.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shot
      @shot = Shot.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def shot_params
      params.require(:shot).permit(:img_url, :title, :description, :allow_comment, :image_or_video, :price, :user_id)
    end
end
