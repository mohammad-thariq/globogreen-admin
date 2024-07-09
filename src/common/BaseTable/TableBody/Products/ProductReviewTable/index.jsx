import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductStatus } from "@/common/BaseTable/TableColumn/ProductStatus";

export const ProductReviewTable = ({
  onProductReviewData,
  onDelete,
  onUpdate,
}) => {
  return (
    <>
      {onProductReviewData &&
        onProductReviewData?.reviews?.map((item, index) => (
          <tr key={index}>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {index + 1}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item?.user?.name || "null"}
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold" title={item?.product?.name}>
                {item.product?.name.slice(0, 50).toLowerCase()} ...
              </span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-sm font-weight-bold">
                {item?.rating}
              </span>
            </td>
            <td className="align-middle text-center cursor-pointer" onClick={() => onUpdate(item.id)}>
              <ProductStatus status={item?.status} />
            </td>

            <td className="align-middle text-center cursor-pointer">
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
