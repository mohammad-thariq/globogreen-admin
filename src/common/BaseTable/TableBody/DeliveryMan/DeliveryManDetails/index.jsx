import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ProductStatus } from "@/common/BaseTable/TableColumn/ProductStatus";
import Image from "next/image";
import { router } from "next/router";
import { BaseUrls } from "../../../../../../env";

export const DeliveryManDetailsTable = ({
  onDeliveryDetailManData,
  onDelete,
  onUpdate,
}) => {
  return (
    <>
      {onDeliveryDetailManData &&
        onDeliveryDetailManData?.map((item, index) => (
          <tr key={index}>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item.name}
              </span>
            </td>
            <td className="align-middle text-center">
              {item?.type === "status" ? (
                <ProductStatus status={item?.value} />
              ) : item?.type === "image" ? (
                <Image
                  width={100}
                  height={100}
                  alt="delivery man Id proof"
                  src={
                    `${BaseUrls?.IMAGE_URL}/${item.value}` ||
                    "/assets/img/placeholder.jpg"
                  }
                  className="text-secondary text-sm font-weight-bold product-image"
                  style={{width: "150px", height: "80px"}}
                />
              ) : (
                <span className="text-secondary text-sm font-weight-bold">
                  {item.value}
                </span>
              )}
            </td>
            {/* <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item?.email}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {0}
              </span>
            </td>
            <td className="align-middle text-center">
              <Image
                width={70}
                height={70}
                alt=""
                src={
                  `${BaseUrls?.IMAGE_URL}/${item.man_image}` ||
                  "/assets/img/placeholder.jpg"
                }
                className="text-secondary text-sm font-weight-bold product-image rounded-circle"
              />
            </td>
            <td className="align-middle text-center">
              <ProductStatus status={item?.status} />
            </td>

            <td className="align-middle text-center cursor-pointer">
            <span>
                <VisibilityIcon
                  sx={{ fontSize: 20 }}
                  onClick={()=> router.push(`/admin/delivery-man/${item.id}`)}
                />
              </span>
              {" "}
              <span>
                <EditNoteIcon
                  sx={{ fontSize: 25 }}
                  onClick={()=>onUpdate(item.id)}
                />
              </span>{" "}
              <span>
                <DeleteIcon
                  sx={{ fontSize: 20 }}
                  onClick={()=>onDelete(item.id)}
                />
              </span>
              
            </td> */}
          </tr>
        ))}
    </>
  );
};
