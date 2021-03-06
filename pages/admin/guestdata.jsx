import React from 'react'
import TableGuests from '../../components/table/TableGuests'
import withAuth from "../../components/utils/privateRoutes";
import { useDispatch, useSelector } from 'react-redux'
import {  getAllGuests } from '../../actions/guest'
import Pagination  from '../../components/pagination/Pagination'
import { getFiltered } from '../../components/utils/filtered';
import Search from '../../components/search/Search';
import ButtonPrint from '../../components/print/ButtonPrint';
import DataGuestsPrint from '../../components/print/DataGuestsPrint';
import Loader from '../../components/loader/FadeLoader';

function Guestdata() {
    const dispatch = useDispatch()
    const allguest = useSelector(state => state.allGuests);
    const { guest, loading } = allguest;
    const [filter, setFilter] = React.useState(null)
    const [activePage, setActivePage] = React.useState(1)

    const componentRef = React.useRef()
    
    React.useEffect(() => {
        dispatch(getAllGuests())
    }, [dispatch]);


    return (
        <div className='flex-col h-full flex items-center justify-center font-sans overflow-hidden'>
             <div className="flex justify-between flex-row items-center w-full">
                <p className='text-gray-800 font-light md:text-3xl'>Data Tamu</p>
                <div className="flex flex-wrap ">
                  
                    <Search filter={filter} setFilter={setFilter}/>
                    <ButtonPrint componentRef={componentRef} />
                </div>
             
            
            </div>
       
        {guest ?
            <>
            <div className="hidden">
                <div  ref = {componentRef} >
                    <DataGuestsPrint
                        filter={filter}
                        setFilter={setFilter}
                        guest={guest}
                        activePage={activePage}
                        setActivePage={setActivePage}
                    />
                </div>
            </div>
            <TableGuests 
                filter={filter}
                setFilter={setFilter}
                guest={guest}
                activePage={activePage}
                setActivePage={setActivePage}
            />
          
                {guest && getFiltered(guest.guest , filter).length > 10 && <Pagination data={guest.guest} activePage={activePage} setActivePage={setActivePage} />}
          </>
         :
         <Loader/> 
        }
        </div>
    )
}

export default  withAuth(Guestdata)
