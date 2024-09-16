import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductStatus } from "@/common/BaseTable/TableColumn/ProductStatus";
import { NoDataFound } from "@/common/NoDataFound";
import { getFormatedDate } from "@/utils/getFormatedDate";

export const RecevieAmount = ({
    onRecevieAmountData,
    onUpdate,
    onDelete,
}) => {
  return (
    <>
      {onRecevieAmountData &&
        onRecevieAmountData?.orderAmounts?.map((item, index) => (
          <tr key={index}>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item.id}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item.deliveryman.fname} {item.deliveryman.lname} 
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item?.total_amount}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
              {getFormatedDate(item?.created_at)}
              </span>
            </td>

            <td className="align-middle text-center cursor-pointer">
              {/* <span>
                <EditNoteIcon
                  sx={{ fontSize: 25 }}
                  onClick={()=> onUpdate(item.id)}
                />
              </span>{" "} */}
              <span>
                <DeleteIcon
                  sx={{ fontSize: 20 }}
                  onClick={()=>onDelete(item.id)}
                />
              </span>
            </td>
          </tr>
        ))}
    </>
  );
};
