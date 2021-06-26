import copyImg from '../assets/images/copy.svg';
import '../styles/roomCode.scss';

type RoomCodeProps = {
  code: string
}

export function RoomCode(props : RoomCodeProps) {

  function copyRoomToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomToClipboard}>
      <div>
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}