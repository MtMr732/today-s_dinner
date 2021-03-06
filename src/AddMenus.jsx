import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextFields from './Textfields';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddMenus() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>メニューを追加する</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextFields>メニュー名</TextFields>
          <TextFields>内容</TextFields>
          <Button variant='contained'>
            追加
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
