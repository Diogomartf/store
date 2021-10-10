class ReviewsController < ApplicationController
  def create
    @product = Product.find(params[:product_id])
    @review = @product.reviews.new(review_params)

    respond_to do |format|
      if @review.save
        ActionCable.server.broadcast(
          "products_channel",
          rating: @review.rating,
          comment: @review.comment
        )
        format.html { redirect_to @review.product, notice: "Review was successfully created." }
      else
        format.html { redirect_to @review.product, alert: "Review was not created" }
      end
    end
  end

  private

  def review_params
    params.require(:review).permit(:comment, :rating)
  end
end
