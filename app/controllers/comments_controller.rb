class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.html { redirect_to tweet_path(params[:tweet_id])  }
      format.json
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.user.id == current_user.id
      @comment.destroy
      respond_to do |format|
        format.html { redirect_to tweet_path(params[:tweet_id])  }
        format.json
      end
    end
  end

  private
  def comment_params
    params.permit(:text, :tweet_id).merge(user_id: current_user.id)
  end
end
