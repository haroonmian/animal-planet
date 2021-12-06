import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store";
import * as action from "../store/actions";
import AnimalDetailsModel from "../components/AnimalDetailsModel";

const Home = () => {
    const [fieldsData, setFieldsData] = useState(null);
    const [state, dispatch] = useContext(Context);
    const [modelShow, setModelShow] = useState(false);

    const onModelToggle = async (id) => {
        setModelShow(!modelShow)
        dispatch(await action.GetItemDetails(id))
    }

    useEffect(() => {
        const animalData = async () => {
            dispatch(await action.GetList());
        };
        animalData();
    }, []);

    const onChangeHandler = (e) => {
        let newfieldsData = fieldsData;
        newfieldsData = {
            ...newfieldsData,
            [e.target.name]: e.target.value,
        }

        setFieldsData(newfieldsData);
    }

    const delItemByID = async (e, id) => {
        e.stopPropagation();
        dispatch(await action.Todelete(id));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // dispatch(await action.ToAddNewTask(fieldsData));
        await action.ToAddNewTask(fieldsData)
    }

    return (
        <div className="container shadow p-3 m-5 bg-white rounded">
            <div class="row">
                <div className="col-4 mx-auto">
                    <form className="mt-5" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Common Name" name="commonName" onChange={(e) => { onChangeHandler(e) }} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Scientific Name" name="scientificName" onChange={(e) => { onChangeHandler(e) }} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Family" name="family" onChange={(e) => { onChangeHandler(e) }} />
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div >
                    <table class="table table-striped table-hover shadow p-3 mb-5 bg-white rounded mt-2">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image URL</th>
                                <th scope="col">Name</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {state.items?.map((item, index) => {
                                return (
                                    <tr key={index} onClick={() => onModelToggle(item.id)}>
                                        <td>{index + 1}</td>
                                        <td><img width="100px" src={item.imageURL} /></td>
                                        <td>{item.commonName}</td>
                                        <td>
                                            <button class="btn shadow-none" onClick={(e) => delItemByID(e, item.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                                                </svg>
                                            </button>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <AnimalDetailsModel show={modelShow} onClose={onModelToggle} />
        </div>
    )

}
export default Home;