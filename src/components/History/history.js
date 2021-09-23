
function History({ handleApiCall, requestHistory }) {
    console.log(requestHistory, 'hhhhhhhhh')
    return (
        <>
            <div className="float-child">

                <h1>Requests History </h1>

                <ul className="list-group">
                    {requestHistory &&
                        requestHistory.map((request, idx) => {
                            return (
                                <li className="list-group-item active" key={idx} >
                                    METHOD :{request.method}
                                    <br />
                                    URL :{request.url}
                                    <br />
                                    <button type="button" className="btn btn-danger" onClick={() => handleApiCall(request)}>Add request</button>


                                </li>);
                        })}
                </ul>
            </div>

        </>
    );
}
export default History;