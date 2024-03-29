import { useState } from "react";

import { Modal } from "../src";

interface IModalContentProps {
  onClick?: () => void;
  count?: number;
}

const InternalModal = ({ handleToggleIsOpen, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleToggleIsOpen}
      name={"modal"}
      title={"Connected Modal"}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi magni hic
      voluptates libero vel in quam porro vitae culpa laborum et reprehenderit,
      placeat voluptatum fugiat modi quo deserunt earum accusamus ipsa
      blanditiis. Quos aspernatur aut alias unde tempore molestias! Ratione
      quasi asperiores qui hic cumque fugit dignissimos atque a vitae. Molestias
      dignissimos harum dolore quibusdam at iusto laboriosam dicta corporis,
      quaerat rem nobis modi doloremque corrupti omnis earum eos, error sapiente
      dolor! Corrupti, optio cupiditate atque distinctio dolor soluta illo?
      Harum inventore optio aut nostrum tempora labore mollitia, accusamus,
      magnam quis suscipit maiores officiis error nemo vitae? Labore, illum ad?
      <button onClick={handleToggleIsOpen}>Close</button>
    </Modal>
  );
};

export const ModalContent = ({ onClick, count }: IModalContentProps) => {
  const [isOpenIternalModal, setIsOpenIternalModal] = useState(false);

  const handleOpenIternalModal = () => {
    setIsOpenIternalModal(true);
  };
  const handleCloseIternalModal = () => {
    setIsOpenIternalModal(false);
  };

  return (
    <>
      <InternalModal
        isOpen={isOpenIternalModal}
        handleToggleIsOpen={handleCloseIternalModal}
      />
      <button onClick={handleOpenIternalModal}>Open Iternal Modal</button>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
      voluptatibus sed repellendus debitis fugiat ipsam doloribus molestiae in
      aliquid. Eum doloribus dolore deleniti? Ullam, atque ipsum! Esse velit vel
      vero? Eligendi dolorem laudantium voluptates ex dicta? Minus cupiditate
      aut deserunt, voluptas eum atque eius eligendi hic ipsam nisi odit
      perspiciatis obcaecati, ab molestias esse quia ad excepturi tempore. Rem,
      optio porro. Cupiditate asperiores esse modi maiores placeat magni
      reiciendis repudiandae nobis id omnis quo, aut, sunt, inventore ea maxime
      reprehenderit repellat iure consequatur rem non doloribus molestias
      accusamus? Non incidunt ex laborum qui nam. Vel debitis, illum a mollitia
      ipsam explicabo qui excepturi maiores aut dolore eius totam reprehenderit
      harum at eum dolores voluptate facilis! Impedit cupiditate distinctio
      porro nulla nisi similique minus provident praesentium accusamus aliquid,
      alias placeat esse fugiat non dolores necessitatibus tempore. Corporis
      voluptatem labore ipsam eum similique minus sed voluptates deleniti velit
      ullam, ab est. Sed facere eos necessitatibus excepturi totam modi
      laudantium temporibus consequatur sapiente cupiditate ullam quis, minima
      repellat. Perferendis voluptas officiis tempore necessitatibus laborum!
      Nisi, eaque! Ducimus, facilis commodi. Consequatur unde laudantium, est,
      modi distinctio quas, deserunt laborum eum molestias ullam odit sequi
      fugit maxime suscipit aperiam fugiat corrupti a? Sunt sit unde fuga!
      Distinctio aliquam autem fugit facere repellendus harum doloribus
      recusandae facilis in sed reiciendis vitae vel atque odit obcaecati
      impedit itaque nisi tenetur optio doloremque, sint ipsa! Voluptatum, sunt
      inventore odio beatae tempora omnis debitis commodi molestiae eum nobis
      molestias officiis voluptatem culpa voluptate incidunt dolores unde optio
      cum pariatur minus, maiores nostrum itaque quidem? Vel atque molestiae
      adipisci est tempore possimus sint rem qui cumque eaque facere placeat
      quasi ratione quibusdam minima deserunt tenetur quam mollitia dolor, nisi
      obcaecati saepe pariatur? Libero consequatur rerum a iusto possimus
      exercitationem veritatis, accusantium necessitatibus laboriosam doloribus,
      vero incidunt tempore totam ducimus nihil.
      {onClick && (
        <>
          <button onClick={onClick}>Increment</button>
          {count}
        </>
      )}
    </>
  );
};
