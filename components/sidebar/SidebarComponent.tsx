import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

import { Modal } from "../modals/Modal";

import styles from "@/styles/Dashboard.module.css";

type modalType = "board" | "task";

export default function SidebarComponent() {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  const handleClickOpen = (type: modalType) => {
    if (type === "board") {
      setOpenModal(true);
      setModalType(type);
    } else if (type === "task") {
      setOpenModal(true);
      setModalType(type);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link href="/">
          <ListItemButton>
            <ListItemIcon className={styles.buttons}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Boards" />
          </ListItemButton>
        </Link>
        <Link href="/tasks">
          <ListItemButton>
            <ListItemIcon className={styles.buttons}>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItemButton>
        </Link>
      </div>

      <div className={styles.bot}>
        <ListItemButton onClick={() => handleClickOpen("board")}>
          <ListItemIcon className={styles.buttons}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Board" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClickOpen("task")}>
          <ListItemIcon className={styles.buttons}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Task" />
        </ListItemButton>
      </div>
      {openModal && (
        <Modal
          openModal={openModal}
          handleClose={handleClose}
          modalType={modalType}
        />
      )}
    </div>
  );
}
