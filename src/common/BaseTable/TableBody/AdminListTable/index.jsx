import DeleteIcon from "@mui/icons-material/Delete"
import Image from "next/image";

import { ProductStatus } from "@/common/BaseTable/TableColumn/ProductStatus";
import { BaseUrls } from "../../../../../env";

export const AdminListTable = ({onAdminData,onDelete}) => {
  return (
    <>
      {onAdminData?.admins?.map((item, index) => (
        <tr key={index}>
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
            <Image
              width={70}
              height={70}
              alt=""
              src={`${BaseUrls?.IMAGE_URL}/${item.image}`}
              className="text-secondary text-sm font-weight-bold product-image"
            />
          </td>
         
          <td className="align-middle text-center">
            <ProductStatus status={item?.status} />
          </td>
          <td className="align-middle text-center">
            <span className="text-secondary text-sm font-weight-bold cursor-pointer">
              <span>
                <DeleteIcon
                  sx={{ fontSize: 20 }}
                  onClick={() => onDelete(item.id)}
                />
              </span>
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};
