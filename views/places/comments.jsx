// Dependency
const React = require('react')

// Comment form
function comment_form (data) {
    return (
        <main>
            <div className='row border-top m-2'>
                <h2>Got Your Own Rant or Rave?</h2>
            </div>
            <form method='POST' action={`/places/${data.id}/comment`}>

                <div className='row'>
                    <label htmlFor='content'>Content</label>
                    <textarea
                    maxLength='300'
                    className='form-control' id='content' name='content' >
                    </textarea>
                </div>
                
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label htmlFor='author'>Author</label>
                        <input 
                        type='text'
                        className='form-control' id='author' name='author' />
                    </div>
                    <div className='form-group col-md-4'>
                        <label htmlFor='stars'>Star Rating</label>
                        <input 
                        type='range' step='0.5' max='5.0' required
                        className='form-range' id='stars' name='stars' />
                    </div>
                    <div className='form-group col-sm-1'>
                        <label htmlFor='rant' className='form-check-label'>Rant</label>
                        <input 
                        type='checkbox'
                        className='form-check-input' id='rant' name='rant' />
                    </div>
                </div>

                <input type='submit' className='btn btn-primary m-1' value='Add Comment' />
            </form>
        </main>
    )
}

// Export comment form
module.exports = comment_form