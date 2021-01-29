class Api::V1::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if params[:shot_id]
      @comments = Comment.where(shot_id: params[:shot_id])
      p 'here'
      p @comments
    elsif params[:user_id]
      @comments = Comment.joins(:shot).where(user_id: params[:user_id])
    else
      @comments = Comment.all
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: { error: 'you need to write some comment' }.to_json, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: { error: 'error updating the comment' }.to_json, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render json: { message: 'comment deleted' }.to_json
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :shot_id, :user_id)
  end
end
