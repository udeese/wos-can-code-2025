using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheRewind.Migrations
{
    /// <inheritdoc />
    public partial class AddedLevelProp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Level",
                table: "Ratings",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Level",
                table: "Ratings");
        }
    }
}
