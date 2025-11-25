import postCommentButton from "src/assets/single-blog/post-comment-button.svg";

export default function BlogDetailPostComment() {
  return (
    <>
      <div className="flex flex-col mt-[6.25em] max-w-[1200px] lg:mx-auto  px-[1.25em] mb-[6.25em]">
        <div className="flex flex-col">
          <p className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize text-center">
            Post a comments
          </p>
        </div>

        <div className="flex flex-col mt-[4em] px-[1.25em] lg:p-[2em]">
          <div className="flex flex-col gap-[1em]">
            <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
              Leave a Reply
            </p>

            <p className="text-[#222] font-Inter text-[1.125rem] font-normal ">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className="flex flex-col mt-[2em] gap-[1em]">
            <input
              type="text"
              className="pt-[1em] pb-[4em] px-[1em] placeholder-[#222]"
              placeholder="Comment"
            />

            <input
              type="text"
              className="p-[1em] placeholder-[#222]"
              placeholder="Name"
            />

            <input
              type="text"
              className="p-[1em] placeholder-[#222]"
              placeholder="Email"
            />

            <input
              type="text"
              className="p-[1em] placeholder-[#222]"
              placeholder="Website (Optional)"
            />

            <button className="flex items-center bg-[#F6D167] py-[1em] px-[1.5em] self-start gap-[0.5em] cursor-pointer">
              <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
                Post comment
              </p>

              <img
                src={postCommentButton}
                alt=""
                className="object-cover object-center w-[0.6875em]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
