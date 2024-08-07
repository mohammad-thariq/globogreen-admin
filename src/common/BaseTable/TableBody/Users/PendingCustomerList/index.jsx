import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from '@mui/icons-material/Email';
import { ProductStatus } from "@/common/BaseTable/TableColumn/ProductStatus";
import { BaseUrls } from "../../../../../../env";
import Image from "next/image";

export const PendingCustomerList = ({
  onPendingCustomerListData,
  onUpdate,
  onSend,
  onDelete,
}) => {

  return (
    <>
      {onPendingCustomerListData &&
        onPendingCustomerListData?.customers?.map((item, index) => (
          <tr key={index} >
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
              {index + 1}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item.name}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item.email}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
              <Image
                width={70}
                height={70}
                alt=""
                src={
                  `${BaseUrls?.IMAGE_URL}/${item.image}` ||
                  "/assets/img/placeholder.jpg"
                }
                className="text-secondary text-sm font-weight-bold product-image rounded-circle"
              />
              </span>
            </td>
            <td className="align-middle text-center">
              <ProductStatus status={item.status} />
            </td>

            <td className="align-middle text-center cursor-pointer">
             
              <span>
                <EmailIcon
                  sx={{ fontSize: 2 }}
                  onClick={() => onSend(item.id)}
                />
              </span>{" "}

              <span>
                <DeleteIcon
                  sx={{ fontSize: 20 }}
                  onClick={() => onDelete(item.id)}
                />
              </span>
            </td>
          </tr>
       ))} 
    </>
  );
};
