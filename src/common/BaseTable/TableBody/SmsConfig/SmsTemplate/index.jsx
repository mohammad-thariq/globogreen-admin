import EditNoteIcon from "@mui/icons-material/EditNote";

export const SmsTemplate = ({ onSmsConfigData, onUpdate }) => {
  return (
    <>
      {onSmsConfigData &&
        onSmsConfigData?.templates?.map((item, index) => (
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

            <td className="align-middle text-center cursor-pointer">
              <span>
                <EditNoteIcon
                  sx={{ fontSize: 25 }}
                  onClick={() => onUpdate(item.id)}
                />
              </span>
            </td>
          </tr>
        ))}
    </>
  );
};
