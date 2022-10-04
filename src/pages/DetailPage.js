import React, { useState, useEffect } from "react";
import NoteDetail from "../components/NoteDetail";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote,  } from '../utils/network-data';



function DetailPage() {
  const { id } = useParams();
  const [ note, setNote] = useState('');
  const [ loading, setLoading ] = useState(true)
  const navigate = useNavigate();

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate('/');
  }
  async function onArchiveHandler(id) {
      await archiveNote(id);
      navigate('/');
  }
  async function onUnarchiveHandler(id) {
      await unarchiveNote(id);
      navigate('/');
  }

  useEffect(() => {
      getNote(id).then((data) => {
          setNote(data.data);
          setLoading(false)
      });

      return () => {
        setLoading(true)
      }
  }, [id]);



  if (loading) {
    return (
      <div className="detail-page">
        <p>Loading.....</p>
      </div>
    )
  }

  if (note === '') {
    return <p>Tidak Ada Catatan</p>;
  }

  return (
    <section className="detail-page">
      <NoteDetail {...note} onDelete={onDeleteHandler} onArchived={onArchiveHandler} unArchived={onUnarchiveHandler}/>
    </section>
  )
}

export default DetailPage;