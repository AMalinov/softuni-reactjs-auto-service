import './Comments.css'
const Comments = ({ user }) => {

    return (
        <section className="comment section">
            <div className="container my-5 py-5 text-dark">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-11 col-lg-9 col-xl-7">
                        <div className="d-flex flex-start">
                            <div className="card w-100">
                                <div className="card-body p-4">
                                    <div className="">
                                        <h5>Mindy Campbell</h5>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Delectus cumque doloribus dolorum dolor repellat nemo animi at
                                            iure autem fuga cupiditate architecto ut quam provident neque,
                                            inventore nisi eos quas?
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ul className="options">
                                                <li><i className="fa fa-trash" /> Delete</li>
                                                <li><i className="fa fa-pencil" /> Edit</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {user.email
                ?
                <>
                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit="{addCommentHandler}">
                            <input
                                type="text"
                                name="username"
                                placeholder="John Doe"
                                onChange="{onChange}"
                                onBlur="{validateUsername}"
                                value="{comment.username}"
                            />
                            <br />
                            {/* {error.username &&
            
                                    <div style={{ color: 'red', fontSize: '1.5em' }}></div>
                                } */}
                            <textarea
                                name="comment"
                                placeholder="Comment......"
                                onChange="{onChange}"
                                onBlur="{validateCommentInput}"
                                value="{comment.comment}"
                            />
                            <input
                                className="btn submit"
                                type="submit"
                                value="Add Comment"
                            />
                        </form>
                    </article>
                </>
                :
                <p>Register to add comments!</p>
            }
        </section >

    );
}

export default Comments;