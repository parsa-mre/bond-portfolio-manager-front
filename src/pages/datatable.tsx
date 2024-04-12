import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { useIssuers } from "../hooks/useIssuer";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "industry", headerName: "Industry", width: 150 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "credit_rating", headerName: "Credit Rating", width: 150 },
];

export default function DataTable() {
    const {
        data: issuers,
        error: issuersError,
        isLoading: issuersLoading,
    } = useIssuers();

    return (
        <div className="text-white h-full">
            <Box
                sx={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    flex: 1,
                    minHeight: "100%",
                }}
            >
                <DataGrid
                    sx={{
                        flexGrow: 1,
                        height: "100%",
                        color: "#151718",
                        "& .MuiDataGrid-columnHeaderTitle": {
                            color: "#F9F9F9",
                        },
                        "& .MuiDataGrid-columnHeader .MuiDataGrid-colCellTitleContainer":
                            {
                                backgroundColor: "#151718",
                            },
                        ".MuiDataGrid-columnHeader--sortable": {
                            backgroundColor: "#151718",
                        },
                        ".MuiDataGrid-filler": {
                            backgroundColor: "#151718",
                        },
                        ".MuiTablePagination-root": {
                            color: "#151718",
                        },
                        ".MuiTablePagination-actions, .MuiInputBase-roo": {
                            color: "#151718",
                        },
                    }}
                    disableRowSelectionOnClick
                    disableDensitySelector
                    disableColumnSelector
                    disableMultipleRowSelection
                    rows={issuers || []}
                    columns={columns}
                />
            </Box>
        </div>
    );
}
